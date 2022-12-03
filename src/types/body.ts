export const BodyZones = {
  UPPER_BODY: "UPPER_BODY",
  LOWER_BODY: "LOWER_BODY",
  CORE: "CORE",
} as const;

export type Zone = typeof BodyZones[keyof typeof BodyZones];

export interface BodyPart {
  name: string;
  zone: Zone;
}

export const Shoulders: BodyPart = {
  name: "Shoulders",
  zone: BodyZones.UPPER_BODY,
};

export const CHESTS: BodyPart = {
  name: "Chests",
  zone: BodyZones.UPPER_BODY,
};

export const BICEPS: BodyPart = {
  name: "Biceps",
  zone: BodyZones.UPPER_BODY,
};

export const TRICEPS: BodyPart = {
  name: "Triceps",
  zone: BodyZones.UPPER_BODY,
};

export const BACK: BodyPart = {
  name: "Back",
  zone: BodyZones.UPPER_BODY,
};

export const ABS: BodyPart = {
  name: "Abs",
  zone: BodyZones.CORE,
};

export const Glutes: BodyPart = {
  name: "Glutes",
  zone: BodyZones.CORE,
};

export const LEGS: BodyPart = {
  name: "Legs",
  zone: BodyZones.LOWER_BODY,
};

export const CALFS: BodyPart = {
  name: "Calfs",
  zone: BodyZones.LOWER_BODY,
};
