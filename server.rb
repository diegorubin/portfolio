require 'sinatra'

require_relative 'lib/run_my_source'

set :port, 9595
set :public_folder, 'public'

get '/' do
  File.open('index.html').read
end

