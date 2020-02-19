module Types
  class QueryType < Types::BaseObject
    field :items, [Types::ItemType], null: false, description: 'Returns a list of items in the library'

    def items
      Item.lazy_preload(:user).all
    end
  end
end
