class CompositionsController < ApplicationController

    def index
        compositions= Composition.all
        render json: compositions

     end
end
