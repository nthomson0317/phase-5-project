class PlaylistCompositionsController < ApplicationController

    before_action :authorized, only: [:create, :destroy]

    def index
        playlistCompositions = PlaylistComposition.all
        render json: playlistCompositions
     end

     def create
        playlist = @user.first_playlist
        playlistComposition = playlist.playlist_compositions.create(playlist_composition_params)
        render json: playlistComposition
    end

    def destroy
        playlistComposition = @user.playlist_compositions.find(params[:id])
        playlistComposition.destroy
        render json: playlistComposition
    end

    private

    def playlist_composition_params
        params.permit(:id)
    end

end
