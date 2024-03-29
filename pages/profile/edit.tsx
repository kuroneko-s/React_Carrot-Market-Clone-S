import { NextPage } from "next";
import ButtonComponent from "@components/button_component";
import InputComponent from "@components/input_component";
import Layout from "@components/layout";
import useUser from "@libs/client/useUser";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import useMutation from "@libs/client/useMutation";

interface EditProfilForm {
  email?: string;
  phone?: string;
  name?: string;
  formsErrors?: string;
  avatar?: FileList;
}

interface EditProfileResponse {
  ok: boolean;
  errors?: string;
}

const EditProfile: NextPage = () => {
  const { user } = useUser();
  const {
    register,
    setValue,
    handleSubmit,
    setError,
    formState: { errors },
    watch,
  } = useForm<EditProfilForm>();

  const [editProfile, { data, loading }] =
    useMutation<EditProfileResponse>(`/api/users/me`);

  useEffect(() => {
    if (user?.email) setValue("email", user?.email);
    if (user?.phone) setValue("phone", user?.phone);
    if (user?.name) setValue("name", user?.name);
    if (user?.avatar)
      setAvatarPreview(
        `https://imagedelivery.net/Q7z_83gXeajsw2vGE0onLQ/${user?.avatar}/avatar`
      );
  }, [user, setValue]);

  const onValid = async ({ email, phone, name, avatar }: EditProfilForm) => {
    if (loading) return;
    if (email === "" && phone === "" && name === "") {
      return setError("formsErrors", {
        message: "이메일이랑 폰번호 둘중하나 넣어주셈",
      });
    }

    if (avatar && avatar.length > 0 && user) {
      const { uploadURL } = await (await fetch(`/api/files`)).json();

      const form = new FormData();
      form.append("file", avatar[0], user?.id + "");

      const {
        result: { id },
      } = await (
        await fetch(uploadURL, {
          method: "POST",
          body: form,
        })
      ).json();
      console.log("id - ", id);
      // upload file to CF URL
      editProfile({
        email,
        phone,
        name,
        avatarId: id,
      });
    } else {
      editProfile({ email, phone, name });
    }
  };
  useEffect(() => {
    if (data && !data.ok && data.errors) {
      setError("formsErrors", { message: data.errors });
    }
  }, [data, setError]);
  const [avatarPreview, setAvatarPreview] = useState("");
  const avatar = watch("avatar");

  useEffect(() => {
    if (avatar && avatar.length > 0) {
      const file = avatar[0];
      setAvatarPreview(URL.createObjectURL(file));
    }
  }, [avatar]);

  return (
    <Layout canGoBack>
      <form className="space-y-4" onSubmit={handleSubmit(onValid)}>
        <div className="flex items-center space-x-3">
          {avatarPreview ? (
            <img src={avatarPreview} className="w-14 h-14 rounded-full" />
          ) : (
            <div className="w-14 h-14 rounded-full bg-slate-400" />
          )}
          <label
            htmlFor="picture"
            className="cursor-pointer py-2 px-3 border border-gray-300 rounded-md text-sm font-bold focus:ring-2 focus:outline-none focus:ring-offset-2 focus:ring-orange-400 text-gray-700"
          >
            Change
            <input
              id="picture"
              type="file"
              className="hidden"
              accept="image/*"
              {...register("avatar")}
            />
          </label>
        </div>

        <div className="space-y-1">
          <InputComponent
            labelContext="Name"
            id="name"
            placeholder="Anonymouse"
            register={register("name")}
          />
          <InputComponent
            labelContext="Email address"
            id="email"
            placeholder="test@test.com"
            register={register("email")}
          />
          <InputComponent
            labelContext="Phone number"
            placeholder=""
            id="phone"
            type="phone"
            countryCode="+82"
            register={register("phone")}
          />
        </div>
        {errors.formsErrors ? (
          <span className="my-2 text-red-500 font-bold block">
            {errors.formsErrors.message}
          </span>
        ) : null}
        <ButtonComponent context={loading ? "Loading..." : "Update Profile"} />
      </form>
    </Layout>
  );
};

export default EditProfile;
