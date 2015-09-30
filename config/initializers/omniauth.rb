Rails.application.config.middleware.use OmniAuth::Builder do
  provider :facebook, '1699321926954820', '0877d4dbb5cf622f8fad09b535910d44',
           :scope => 'email,user_birthday'
end
