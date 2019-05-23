Rails.application.routes.draw do
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  root to: 'home#index'

  namespace :api do
    namespace :v1 do

      resources :budgets, only: [:index, :create, :destroy, :update, :show] do
        resources :line_items, only: [:index, :create, :destroy, :update, :show]
        resources :budget_members, only: [:index, :create, :destroy, :update, :show]
      end

      resources :users, only: [:index, :create, :destroy, :update, :show]

    end
  end
end
