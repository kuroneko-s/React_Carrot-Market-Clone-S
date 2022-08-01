import { useState } from "react";

interface UseMutationStates {
  loading: boolean;
  data?: object;
  error?: object;
}

type UseMutationResult = [(data: any) => void, UseMutationStates];

export default function useMutation(url: string): UseMutationResult {
  const [state, setState] = useState<UseMutationStates>({
    loading: false,
    data: undefined,
    error: undefined,
  });
  //   const [loading, setLoading] = useState(false);
  //   const [data, setData] = useState<undefined | any>(undefined);
  //   const [error, setError] = useState<undefined | any>(undefined);

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
        setState({
          ...state,
          data: json,
        })
      )
      .catch((error) =>
        setState({
          ...state,
          error,
        })
      )
      .finally(() =>
        setState({
          ...state,
          loading: true,
        })
      );
  }

  return [mutation, state];
}
