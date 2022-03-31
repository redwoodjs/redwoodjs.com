import type { DocumentNode } from 'graphql/language/ast'
import { useCallback } from 'react'
import { useMutation } from '@apollo/client'
import type {
  FetchResult,
  MutationHookOptions,
  MutationResult,
} from '@apollo/client'
import { toast } from '@redwoodjs/web/toast'
import type { Renderable, ValueOrFunction } from '@redwoodjs/web/toast'

// --

export type ToastMessages<D = object> = {
  error: ValueOrFunction<Renderable, Error>
  loading: Renderable
  success: ValueOrFunction<Renderable, { data: D }>
}

// --

const DefaultMessages: ToastMessages<unknown> = {
  error: (e: Error) => e.message || 'Something went wrong',
  loading: 'Loading your request.',
  success: 'Request completed successfully.',
}

// --

const useToastMutation = <Data = object, Variables = object>(
  mutation: DocumentNode,
  opts?: MutationHookOptions<Data, Variables>
): [
  (v: Variables, messages?: ToastMessages<Data>) => Promise<FetchResult<Data>>,
  MutationResult<Data>
] => {
  const [m, res] = useMutation<Data, Variables>(mutation, opts)

  const mutate = useCallback(
    (variables: Variables, messages: ToastMessages<Data> = DefaultMessages) =>
      toast.promise(m({ variables }), messages),
    [m]
  )

  return [mutate, res]
}

// --

export default useToastMutation
