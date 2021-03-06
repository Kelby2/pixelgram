Rails.application.routes.draw do

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do

    resources :users, only: [:index, :show, :create, :update] do
      resources :photos, only: [:index]
      collection do
        get 'search'
      end

      member do
        post 'follow'
        delete 'unfollow'
      end
    end

    resources :photos, only: [:index, :show, :create, :destroy] do
      resources :comments, only: [:index, :create]
    end

    resources :likes, only: [:create, :destroy]
    resources :comments, only: [:index, :destroy]
    resource :sessions, only: [:create, :destroy]
  end

end
