import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CreateAddressValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    zip: schema.string({}, [rules.required()]),
    street: schema.string({}, [rules.required()]),
    number: schema.number([rules.unsigned()]),
    state: schema.string({}),
    complement: schema.string({}),
    obs: schema.string({}, [rules.maxLength(200)]),
  })

  public messages: CustomMessages = {}
}
