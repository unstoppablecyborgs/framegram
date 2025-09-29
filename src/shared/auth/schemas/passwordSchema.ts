import { z } from 'zod'

export const passwordSchema = z
  .string()
  .min(6, 'Minimum number of characters 6')
  .max(20, 'Maximum number of characters 20')
  .regex(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!"#$%&'()*+,\-./:;<=>?@[\\\]^_{|}~]).+$/,
    'Password must contain 0-9, a-z, A-Z, ! " # $ % & \' ( ) * + , - . / : ; < = > ? @ [ \\ ] ^ _ { | } ~'
  )
