class ComposersController < ApplicationController

    def index
        composers= Composer.all
        render json: composers

     end

end
