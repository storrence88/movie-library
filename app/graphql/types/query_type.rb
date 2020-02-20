module Types
  class QueryType < Types::BaseObject
    field :items, [Types::ItemType], null: false, description: 'Returns a list of items in the library'
    field :me, Types::UserType, null: true

    
    def items
      Item.lazy_preload(:user).all
    end
    
    def me
      context[:current_user]
    end
  end
end
