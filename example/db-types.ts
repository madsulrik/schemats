
/**
 * AUTO-GENERATED FILE @ Fri, 27 Aug 2021 08:26:50 GMT - DO NOT EDIT!
 *
 * This file was automatically generated by schemats v.0.0.8
 * $ schemats generate postgres://username:password@localhost:5432/schemats -C -s pet_store
 *
 */

import { RandomPetFacts } from './db-custom-types'



export enum Animal {
	Cat = 'cat',
	Dog = 'dog' 
}

export interface User { 
	uuid: string
	name: string 
}

export interface Pet { 
	uuid: string
	owner?: string | null
	type: Animal
	name: string
	birthdate?: Date | null
	lastSeenLocation?: { x: number, y: number } | null
	randomFacts?: RandomPetFacts | null
	moreRandomFacts?: unknown | null 
}

export interface Tables {
    user: User,
	pet: Pet
}

export type CustomTypes = RandomPetFacts