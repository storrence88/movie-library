module Types
  class MutationType < Types::BaseObject
    field :add_item_mutation, mutation: Mutations::AddItemMutation
    field :sign_in, mutation: Mutations::SignInMutation
  end
end
