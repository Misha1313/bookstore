import { CustomProviderEnum } from "src/common/enums/custom-provider.enum";
import { UserRepository } from "../providers/user.provider";

export const GreetingProvider = {
    provide: CustomProviderEnum.Greeing,
    useFactory: (userRepository: UserRepository, optionalProvider?: string) => {
      const name = userRepository.getName();
      return `hello ${name}`;
    },
    inject: [UserRepository, { token: 'SomeOptionalProvider', optional: true }],

  };