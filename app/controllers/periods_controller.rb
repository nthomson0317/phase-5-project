class PeriodsController < ApplicationController


    def index
        periods= Period.all
        render json: periods

     end
end


