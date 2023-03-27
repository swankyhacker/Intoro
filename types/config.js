import { TIERS } from "./types"

export const tiers = [
  TIERS.APPRENTICE,
  TIERS.GURU,
  TIERS.MASTER,
  TIERS.ENLIGHTENED,
  TIERS.BURNED,
]

export const apprenticeConfig = [
  {
    value: 1,
    type: "hours",
  },
  {
    value: 3,
    type: "hours",
  },
  {
    value: 8,
    type: "hours",
  },
  {
    value: 1,
    type: "days",
  },
  {
    value: 2,
    type: "days",
  },
]

export const tierConfig = [
  {
    value: 1,
    type: "hours",
  },
  {
    value: 1,
    type: "weeks",
  },
  {
    value: 2,
    type: "weeks",
  },
  {
    value: 1,
    type: "months",
  },
  {
    value: 2,
    type: "months",
  },
]
