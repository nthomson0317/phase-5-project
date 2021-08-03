class PlaylistCompositionsController < ApplicationController

    before_action :authorized, only: [:create]

    def index
        playlistCompositions = PlaylistComposition.all
        render json: playlistCompositions
     end

     def create
        playlist = @user.first_playlist
        playlistComposition = playlist.playlist_compositions.create(playlist_composition_params)
        render json: playlistComposition
    end

    private

    def playlist_composition_params
        params.permit(:composition_id)
    end

end
