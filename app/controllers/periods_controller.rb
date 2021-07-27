class PeriodsController < ApplicationController


    def index
        periods= Period.includes(:composers).all
        render json: periods

     end
end


