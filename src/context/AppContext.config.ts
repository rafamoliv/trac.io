import { faker } from '@faker-js/faker'

export default {
  schedule: {
    avatar: faker.image.avatar(),
    name: `${faker.name.firstName()} ${faker.name.lastName()}`
  }
}
