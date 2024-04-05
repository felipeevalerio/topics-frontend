import { HTTP_STATUS_CODES } from '@/domain/consts/HttpStatusCode'
import type { RequestInit } from 'next/dist/server/web/spec-extension/request'

interface GETReturnType<T> {
  data: T | null
  isSuccessful: boolean
}

export function useFetch() {
  async function GET<T>(
    url: string,
    options?: RequestInit,
  ): Promise<GETReturnType<T>> {
    try {
      const response = await fetch(url, {
        method: 'GET',
        ...options,
      })

      const data = await response.json()
      if (response.status !== HTTP_STATUS_CODES.OK)
        throw new Error(data.message)

      return {
        data: data as T,
        isSuccessful: response.ok,
      }
    } catch (error) {
      return {
        data: null,
        isSuccessful: false,
      }
    }
  }

  async function POST<T>(
    url: string,
    options?: RequestInit,
  ): Promise<GETReturnType<T>> {
    try {
      const response = await fetch(url, {
        method: 'POST',
        ...options,
      })

      const data = await response.json()

      if (response.status !== HTTP_STATUS_CODES.CREATED)
        throw new Error(data.message)

      return {
        data: data as T,
        isSuccessful: response.ok,
      }
    } catch (error) {
      return {
        data: null,
        isSuccessful: false,
      }
    }
  }

  return {
    GET,
    POST,
  }
}
