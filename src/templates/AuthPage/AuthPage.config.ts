import { faker } from '@faker-js/faker'

export default {
  carrouselData: [
    {
      name: faker.name.fullName(),
      avatar: faker.image.avatar(),
      jobType: faker.name.jobType(),
      description: faker.lorem.sentences(2)
    },
    {
      name: faker.name.fullName(),
      avatar: faker.image.avatar(),
      jobType: faker.name.jobType(),
      description: faker.lorem.sentences(2)
    },
    {
      name: faker.name.fullName(),
      avatar: faker.image.avatar(),
      jobType: faker.name.jobType(),
      description: faker.lorem.sentences(2)
    }
  ]
}
