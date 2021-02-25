Rails.application.routes.draw do
  devise_for :users, controllers: { 
    confirmations: 'users/confirmations', 
    omniauth_callbacks: 'users/omniauth_callbacks',
    registrations: 'users/registrations' }
  
  resources :users, only: [:index, :show, :destroy] do 
    member do
      patch :ban
    end 
  end
  root 'static_pages#landing_page'
  get 'privacy_policy', to: 'static_pages#privacy_policy'
end
