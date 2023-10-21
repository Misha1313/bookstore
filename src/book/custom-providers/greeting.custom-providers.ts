import { CustomProviderEnum } from "src/common/enums/custom-provider.enum";
import { ProviderRepository } from "../providers/user.provider";

export const GreetingProvider = {
    provide: CustomProviderEnum.Greeing,
    useFactory: (providerRepository: ProviderRepository, optionalProvider?: string) => {
      const name = providerRepository.getName();
      return `hello ${name}`;
    },
    inject: [ProviderRepository, { token: 'SomeOptionalProvider', optional: true }],

  };