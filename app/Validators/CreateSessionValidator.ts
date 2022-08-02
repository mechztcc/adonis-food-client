import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CreateSessionValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    phone: schema.string({}, [rules.required()]),
    password: schema.string({}, [rules.minLength(6)]),
  })
  public messages: CustomMessages = {}
}
