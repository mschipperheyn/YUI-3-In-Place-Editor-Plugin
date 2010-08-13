require 'rubygems'
require 'sinatra'

post '/test/?' do
  sleep 1
  value = params[:value]
  if !(value.nil?) && !(value == "")
    value
  else
    error(422, "You must have a value!")
  end
end