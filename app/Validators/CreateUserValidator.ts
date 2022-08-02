import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CreateUserValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    name: schema.string({}, [rules.required()]),
    phone: schema.string({}, [rules.required()]),
    password: schema.string({}, [rules.required(), rules.minLength(6)])
  })

  public messages: CustomMessages = {}
}
