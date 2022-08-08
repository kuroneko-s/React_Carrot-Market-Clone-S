import { useState } from "react";

interface UseMutationStates<T> {
  loading: boolean;
  data?: T;
  error?: Object;
}

type UseMutationResult<T> = [(data: any) => void, UseMutationStates<T>];

export default function useMutation<T = any>(
  url: string
): UseMutationResult<T> {
  const [state, setState] = useState<UseMutationStates<T>>({
    loading: false,
    data: undefined,
    error: undefined,
  });

  function mutation(data: any) {
    setState({
      ...state,
      loading: true,
    });

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json().catch(() => {}))
      .then((json) =>
        setState((prev) => ({
          ...prev,
          data: json,
        }))
      )
      .catch((error) =>
        setState((prev) => ({
          ...prev,
          error,
        }))
      )
      .finally(() => {
        setState((prev) => ({
          ...prev,
          loading: false,
        }));
      });
  }

  return [mutation, state];
}
