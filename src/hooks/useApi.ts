"use client"

import { useState } from "react"
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import type { LoadingState } from "../types"

interface UseApiOptions {
  onSuccess?: (data: any) => void
  onError?: (error: any) => void
}

export function useApiQuery<T>(key: string[], queryFn: () => Promise<T>) {
  return useQuery({
    queryKey: key,
    queryFn,
  })
}

export function useApiMutation<T, V>(mutationFn: (variables: V) => Promise<T>, options?: UseApiOptions) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn,
    onSuccess: (data) => {
      options?.onSuccess?.(data)
      queryClient.invalidateQueries()
    },
    onError: options?.onError,
  })
}

export function useLoadingState() {
  const [state, setState] = useState<LoadingState>("idle")

  const setLoading = () => setState("loading")
  const setSuccess = () => setState("success")
  const setError = () => setState("error")
  const setIdle = () => setState("idle")

  return {
    state,
    isLoading: state === "loading",
    isSuccess: state === "success",
    isError: state === "error",
    isIdle: state === "idle",
    setLoading,
    setSuccess,
    setError,
    setIdle,
  }
}
