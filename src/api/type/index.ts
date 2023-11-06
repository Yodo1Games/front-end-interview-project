interface PersonaInfoRequest {
  name: string
  owner_tel: string
  theme: number
  avatar: string
}

interface PersonaPasswordRequest {
  passwd: string
  new_passwd: string
}

interface RegisterBody {
  name: string
  email: string
  passwd: string
  lang: string
  owner_name: string
  owner_website: string
  utm?: {
    utm_source?: string
    utm_medium?: string
    utm_campaign?: string
  }
}

interface VerifyEmailBody {
  email: string
  verify_code: string
}

interface ResetPasswordEmailBody {
  email: string
}

interface ResetPasswordBody {
  code: string
  email: string
  passwd: string
}

export type {
  PersonaInfoRequest,
  PersonaPasswordRequest,
  RegisterBody,
  VerifyEmailBody,
  ResetPasswordBody,
  ResetPasswordEmailBody,
}
