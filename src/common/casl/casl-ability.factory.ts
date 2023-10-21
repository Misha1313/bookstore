// import { AbilityBuilder, InferSubjects, MongoAbility } from "@casl/ability";
// import { Injectable } from "@nestjs/common";
// import { Action } from "rxjs/internal/scheduler/Action";
// import { User } from "src/user/entities/user.entity";

// type Subjects = InferSubjects<typeof User> | 'all';

// export type AppAbility = MongoAbility<[Action, Subjects]>;

// @Injectable()
// export class CaslAbilityFactory {
//   createForUser(user: User) {
//     const { can, cannot, build } = new AbilityBuilder<
//       Ability<[Action, Subjects]>
//     >(Ability as AbilityClass<AppAbility>);

//     if (user.isAdmin) {
//       can(Action.Manage, 'all'); // read-write access to everything
//     } else {
//       can(Action.Read, 'all'); // read-only access to everything
//     }

//     can(Action.Update, Article, { authorId: user.id });
//     cannot(Action.Delete, Article, { isPublished: true });

//     return build({
//       // Read https://casl.js.org/v6/en/guide/subject-type-detection#use-classes-as-subject-types for details
//       detectSubjectType: (item) =>
//         item.constructor as ExtractSubjectType<Subjects>,
//     });
//   }
// }