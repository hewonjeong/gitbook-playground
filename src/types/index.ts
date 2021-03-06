import { stringType } from 'aws-sdk/clients/iam'

export interface Movie {
  key: string
  description: string
  poster: string
  genre: number[]
  boxOffice?: number
  releasedAt: string
  writtors: string[]
  directors: string[]
  rating: string
  audience: {
    average: number
    rating: number
    likeRate: number
  }
  tomatoMeter: {
    score: number
    average: number
    counts: number
    fresh: number
    rotten: number
  }
  consensus: string
  title: string
  year: number
  casts: string[]
}
