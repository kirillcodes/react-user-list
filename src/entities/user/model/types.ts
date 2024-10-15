import React from "react"

export type UserCardType = {
  id?: number,
  username: string,
  name: string,
  email: string,
  buttonSlot?: React.ReactNode,
}

export type UserStateType = {
  favorites: UserCardType[],
  foundFavorites: UserCardType[],
  selectedUser: UserCardType | null,
  searchValue: string,
  isModal: boolean,
}
