class PlaylistsController < ApplicationController

    before_action :authorized, only: [:create, :destroy]
    def index
        playlists= Playlist.all
        render json: playlists

     end

     
     def create
         playlist = @user.playlists.create(playlist_params)
         render json: playlist
     end

     def destroy
        playlist = @user.playlists.find(params[:id])
        playlist.destroy
        render json: playlist
    end


    def playlist_params
        params.permit(:name)
    end

end
