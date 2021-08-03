class User < ApplicationRecord
    has_secure_password

    has_many :playlists
    has_many :playlist_compositions, through: :playlists

    validates :username, uniqueness: {case_sensitive: false}
    validates :password, length: {in: 5..10}

    after_create :create_first_playlist

    def first_playlist
        self.playlists.first
    end

    private

    def create_first_playlist
        self.playlists.create(name: "#{self.username}'s playlist")
    end
end
