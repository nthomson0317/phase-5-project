class CompositionsController < ApplicationController


    def index
        compositions= Composition.all
        render json: compositions

     end

    #  def show
    #     composition = Composition.find(params[:id])
    #     render json: @composition
    # end

     def show
        RSpotify.authenticate(ENV["SPOTIFY_ID"], ENV["SPOTIFY_SECRET"])
        comp = Composition.find_by(id: composition_params[:id])
        tracks = RSpotify::Track.search(comp[:name])
        track = tracks.first
        id = track.instance_variable_get('@id')
        # byebug
        render json: track
     end

     private

     def composition_params
        params.permit(:id)
    end

end
