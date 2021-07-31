# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


early = Period.create(name: "Early Music", era: "500-1600", image_src: '/images/early_music.jpeg')
baroque = Period.create(name: "Baroque", era: "1600-1750", image_src: '/images/baroque.jpeg')
classical = Period.create(name: "Classical", era: "1750-1820", image_src: 'images/classical.jpeg')
romantic = Period.create(name: "Romantic", era: "1820-1910", image_src: '/images/romantic.jpeg')
modern = Period.create(name: "Modern", era: "1910-2000", image_src: '/images/modern.jpeg')
contemporary = Period.create(name: "Contemporary", era: "2000-", image_src: '/images/contemporary.jpeg')


#COMPOSER SEEDING FROM OPEN OPUS

def medieval_composers
    response = RestClient.get 'https://api.openopus.org/composer/list/epoch/Medieval.json'
    json = JSON.parse response
    puts json

    if !json.nil?
        json["composers"].map do |composer|
            Composer.create(name: "#{composer["complete_name"]}", birth: "#{composer["birth"]}", death: "#{composer["death"]}", portrait: "#{composer["portrait"]}", period_id: 1)
        end
    else
        puts "Error seeding composers"
    end
end

medieval_composers

def ren_composers
    response = RestClient.get 'https://api.openopus.org/composer/list/epoch/Renaissance.json'
    json = JSON.parse response
    puts json

    if !json.nil?
        json["composers"].map do |composer|
            Composer.create(name: "#{composer["complete_name"]}", birth: "#{composer["birth"]}", death: "#{composer["death"]}", portrait: "#{composer["portrait"]}", period_id: 1)
        end
    else
        puts "Error seeding composers"
    end
end

ren_composers

def baroque_composers
    response = RestClient.get 'https://api.openopus.org/composer/list/epoch/Baroque.json'
    json = JSON.parse response
    puts json

    if !json.nil?
        json["composers"].map do |composer|
            Composer.create(name: "#{composer["complete_name"]}", birth: "#{composer["birth"]}", death: "#{composer["death"]}", portrait: "#{composer["portrait"]}", period_id: 2)
        end
    else
        puts "Error seeding composers"
    end
end

baroque_composers

def classical_composers
    response = RestClient.get 'https://api.openopus.org/composer/list/epoch/Classical.json'
    json = JSON.parse response
    puts json

    if !json.nil?
        json["composers"].map do |composer|
            Composer.create(name: "#{composer["complete_name"]}", birth: "#{composer["birth"]}", death: "#{composer["death"]}", portrait: "#{composer["portrait"]}", period_id: 3)
        end
    else
        puts "Error seeding composers"
    end
end

classical_composers

def early_romantic_composers
    response = RestClient.get 'https://api.openopus.org/composer/list/epoch/Early%20Romantic.json'
    json = JSON.parse response
    puts json

    if !json.nil?
        json["composers"].map do |composer|
            Composer.create(name: "#{composer["complete_name"]}", birth: "#{composer["birth"]}", death: "#{composer["death"]}", portrait: "#{composer["portrait"]}", period_id: 4)
        end
    else
        puts "Error seeding composers"
    end
end

early_romantic_composers

def romantic_composers
    response = RestClient.get 'https://api.openopus.org/composer/list/epoch/Romantic.json'
    json = JSON.parse response
    puts json

    if !json.nil?
        json["composers"].map do |composer|
            Composer.create(name: "#{composer["complete_name"]}", birth: "#{composer["birth"]}", death: "#{composer["death"]}", portrait: "#{composer["portrait"]}", period_id: 4)
        end
    else
        puts "Error seeding composers"
    end
end

romantic_composers

def late_romantic_composers
    response = RestClient.get 'https://api.openopus.org/composer/list/epoch/Late%20Romantic.json'
    json = JSON.parse response
    puts json

    if !json.nil?
        json["composers"].map do |composer|
            Composer.create(name: "#{composer["complete_name"]}", birth: "#{composer["birth"]}", death: "#{composer["death"]}", portrait: "#{composer["portrait"]}", period_id: 4)
        end
    else
        puts "Error seeding composers"
    end
end

late_romantic_composers

def modern_composers
    response = RestClient.get 'https://api.openopus.org/composer/list/epoch/20th%20Century.json'
    json = JSON.parse response
    puts json

    if !json.nil?
        json["composers"].map do |composer|
            Composer.create(name: "#{composer["complete_name"]}", birth: "#{composer["birth"]}", death: "#{composer["death"]}", portrait: "#{composer["portrait"]}", period_id: 5)
        end
    else
        puts "Error seeding composers"
    end
end

modern_composers

def post_war_composers
    response = RestClient.get 'https://api.openopus.org/composer/list/epoch/Post-War.json'
    json = JSON.parse response
    puts json

    if !json.nil?
        json["composers"].map do |composer|
            Composer.create(name: "#{composer["complete_name"]}", birth: "#{composer["birth"]}", death: "#{composer["death"]}", portrait: "#{composer["portrait"]}", period_id: 5)
        end
    else
        puts "Error seeding composers"
    end
end

post_war_composers

def contemporary_composers
    response = RestClient.get 'https://api.openopus.org/composer/list/epoch/21st%20Century.json'
    json = JSON.parse response
    puts json

    if !json.nil?
        json["composers"].map do |composer|
            Composer.create(name: "#{composer["complete_name"]}", birth: "#{composer["birth"]}", death: "#{composer["death"]}", portrait: "#{composer["portrait"]}", period_id: 5)
        end
    else
        puts "Error seeding composers"
    end
end

contemporary_composers


#Compositions seeding from Open Opus
#/work/list/composer/129/genre/Popular.json

# def dufay_compositions
#     response = RestClient.get 'https://api.openopus.org/work/list/composer/1/genre/all.json'
#     json = JSON.parse response
#     puts json

#     if !json.nil?
#         json["works"].map do |composition|
#             Composition.create(name: "#{composition["title"]}", genre: "#{composition["genre"]}", composer_id: 1)
#         end
#     else
#         puts "Error seeding compositions"
#     end
# end

# dufay_compositions

# def leonin_compositions
#     response = RestClient.get 'https://api.openopus.org/work/list/composer/2/genre/all.json'
#     json = JSON.parse response
#     puts json

#     if !json.nil?
#         json["works"].map do |composition|
#             Composition.create(name: "#{composition["title"]}", genre: "#{composition["genre"]}", composer_id: 2)
#         end
#     else
#         puts "Error seeding compositions"
#     end
# end

# leonin_compositions

# def machaut_compositions
#     response = RestClient.get 'https://api.openopus.org/work/list/composer/3/genre/all.json'
#     json = JSON.parse response
#     puts json

#     if !json.nil?
#         json["works"].map do |composition|
#             Composition.create(name: "#{composition["title"]}", genre: "#{composition["genre"]}", composer_id: 3)
#         end
#     else
#         puts "Error seeding compositions"
#     end
# end

# machaut_compositions


# def perotin_compositions
#     response = RestClient.get 'https://api.openopus.org/work/list/composer/4/genre/all.json'
#     json = JSON.parse response
#     puts json

#     if !json.nil?
#         json["works"].map do |composition|
#             Composition.create(name: "#{composition["title"]}", genre: "#{composition["genre"]}", composer_id: 4)
#         end
#     else
#         puts "Error seeding compositions"
#     end
# end

# perotin_compositions

# def byrd_compositions
#     response = RestClient.get 'https://api.openopus.org/work/list/composer/5/genre/all.json'
#     json = JSON.parse response
#     puts json

#     if !json.nil?
#         json["works"].map do |composition|
#             Composition.create(name: "#{composition["title"]}", genre: "#{composition["genre"]}", composer_id: 5)
#         end
#     else
#         puts "Error seeding compositions"
#     end
# end

# byrd_compositions

# def prez_compositions
#     response = RestClient.get 'https://api.openopus.org/work/list/composer/6/genre/all.json'
#     json = JSON.parse response
#     puts json

#     if !json.nil?
#         json["works"].map do |composition|
#             Composition.create(name: "#{composition["title"]}", genre: "#{composition["genre"]}", composer_id: 6)
#         end
#     else
#         puts "Error seeding compositions"
#     end
# end

# prez_compositions

# def dowland_compositions
#     response = RestClient.get 'https://api.openopus.org/work/list/composer/7/genre/all.json'
#     json = JSON.parse response
#     puts json

#     if !json.nil?
#         json["works"].map do |composition|
#             Composition.create(name: "#{composition["title"]}", genre: "#{composition["genre"]}", composer_id: 7)
#         end
#     else
#         puts "Error seeding compositions"
#     end
# end

# dowland_compositions

# def gesualdo_compositions
#     response = RestClient.get 'https://api.openopus.org/work/list/composer/8/genre/all.json'
#     json = JSON.parse response
#     puts json

#     if !json.nil?
#         json["works"].map do |composition|
#             Composition.create(name: "#{composition["title"]}", genre: "#{composition["genre"]}", composer_id: 8)
#         end
#     else
#         puts "Error seeding compositions"
#     end
# end

# gesualdo_compositions

# def gibbons_compositions
#     response = RestClient.get 'https://api.openopus.org/work/list/composer/9/genre/all.json'
#     json = JSON.parse response
#     puts json

#     if !json.nil?
#         json["works"].map do |composition|
#             Composition.create(name: "#{composition["title"]}", genre: "#{composition["genre"]}", composer_id: 9)
#         end
#     else
#         puts "Error seeding compositions"
#     end
# end

# gibbons_compositions


# def janequin_compositions
#     response = RestClient.get 'https://api.openopus.org/work/list/composer/10/genre/all.json'
#     json = JSON.parse response
#     puts json

#     if !json.nil?
#         json["works"].map do |composition|
#             Composition.create(name: "#{composition["title"]}", genre: "#{composition["genre"]}", composer_id: 10)
#         end
#     else
#         puts "Error seeding compositions"
#     end
# end

# janequin_compositions

# def lassus_compositions
#     response = RestClient.get 'https://api.openopus.org/work/list/composer/11/genre/all.json'
#     json = JSON.parse response
#     puts json

#     if !json.nil?
#         json["works"].map do |composition|
#             Composition.create(name: "#{composition["title"]}", genre: "#{composition["genre"]}", composer_id: 11)
#         end
#     else
#         puts "Error seeding compositions"
#     end
# end

# lassus_compositions

# def monteverdi_compositions
#     response = RestClient.get 'https://api.openopus.org/work/list/composer/12/genre/all.json'
#     json = JSON.parse response
#     puts json

#     if !json.nil?
#         json["works"].map do |composition|
#             Composition.create(name: "#{composition["title"]}", genre: "#{composition["genre"]}", composer_id: 12)
#         end
#     else
#         puts "Error seeding compositions"
#     end
# end

# monteverdi_compositions

# def obrecht_compositions
#     response = RestClient.get 'https://api.openopus.org/work/list/composer/13/genre/all.json'
#     json = JSON.parse response
#     puts json

#     if !json.nil?
#         json["works"].map do |composition|
#             Composition.create(name: "#{composition["title"]}", genre: "#{composition["genre"]}", composer_id: 13)
#         end
#     else
#         puts "Error seeding compositions"
#     end
# end

# obrecht_compositions

# def ockeghem_compositions
#     response = RestClient.get 'https://api.openopus.org/work/list/composer/14/genre/all.json'
#     json = JSON.parse response
#     puts json

#     if !json.nil?
#         json["works"].map do |composition|
#             Composition.create(name: "#{composition["title"]}", genre: "#{composition["genre"]}", composer_id: 14)
#         end
#     else
#         puts "Error seeding compositions"
#     end
# end

# ockeghem_compositions

# def palestrina_compositions
#     response = RestClient.get 'https://api.openopus.org/work/list/composer/15/genre/all.json'
#     json = JSON.parse response
#     puts json

#     if !json.nil?
#         json["works"].map do |composition|
#             Composition.create(name: "#{composition["title"]}", genre: "#{composition["genre"]}", composer_id: 15)
#         end
#     else
#         puts "Error seeding compositions"
#     end
# end

# palestrina_compositions

# def praetorius_compositions
#     response = RestClient.get 'https://api.openopus.org/work/list/composer/16/genre/all.json'
#     json = JSON.parse response
#     puts json

#     if !json.nil?
#         json["works"].map do |composition|
#             Composition.create(name: "#{composition["title"]}", genre: "#{composition["genre"]}", composer_id: 16)
#         end
#     else
#         puts "Error seeding compositions"
#     end
# end

# praetorius_compositions

# def schutz_compositions
#     response = RestClient.get 'https://api.openopus.org/work/list/composer/17/genre/all.json'
#     json = JSON.parse response
#     puts json

#     if !json.nil?
#         json["works"].map do |composition|
#             Composition.create(name: "#{composition["title"]}", genre: "#{composition["genre"]}", composer_id: 17)
#         end
#     else
#         puts "Error seeding compositions"
#     end
# end

# schutz_compositions

# def sweelinck_compositions
#     response = RestClient.get 'https://api.openopus.org/work/list/composer/18/genre/all.json'
#     json = JSON.parse response
#     puts json

#     if !json.nil?
#         json["works"].map do |composition|
#             Composition.create(name: "#{composition["title"]}", genre: "#{composition["genre"]}", composer_id: 18)
#         end
#     else
#         puts "Error seeding compositions"
#     end
# end

# sweelinck_compositions

# def tallis_compositions
#     response = RestClient.get 'https://api.openopus.org/work/list/composer/19/genre/all.json'
#     json = JSON.parse response
#     puts json

#     if !json.nil?
#         json["works"].map do |composition|
#             Composition.create(name: "#{composition["title"]}", genre: "#{composition["genre"]}", composer_id: 19)
#         end
#     else
#         puts "Error seeding compositions"
#     end
# end

# tallis_compositions

# def taverner_compositions
#     response = RestClient.get 'https://api.openopus.org/work/list/composer/20/genre/all.json'
#     json = JSON.parse response
#     puts json

#     if !json.nil?
#         json["works"].map do |composition|
#             Composition.create(name: "#{composition["title"]}", genre: "#{composition["genre"]}", composer_id: 20)
#         end
#     else
#         puts "Error seeding compositions"
#     end
# end

# taverner_compositions

# def victoria_compositions
#     response = RestClient.get 'https://api.openopus.org/work/list/composer/21/genre/all.json'
#     json = JSON.parse response
#     puts json

#     if !json.nil?
#         json["works"].map do |composition|
#             Composition.create(name: "#{composition["title"]}", genre: "#{composition["genre"]}", composer_id: 21)
#         end
#     else
#         puts "Error seeding compositions"
#     end
# end

# victoria_compositions

# def albinoni_compositions
#     response = RestClient.get 'https://api.openopus.org/work/list/composer/22/genre/all.json'
#     json = JSON.parse response
#     puts json

#     if !json.nil?
#         json["works"].map do |composition|
#             Composition.create(name: "#{composition["title"]}", genre: "#{composition["genre"]}", composer_id: 22)
#         end
#     else
#         puts "Error seeding compositions"
#     end
# end

# albinoni_compositions

# def bach_compositions
#     response = RestClient.get 'https://api.openopus.org/work/list/composer/23/genre/all.json'
#     json = JSON.parse response
#     puts json

#     if !json.nil?
#         json["works"].map do |composition|
#             Composition.create(name: "#{composition["title"]}", genre: "#{composition["genre"]}", composer_id: 23)
#         end
#     else
#         puts "Error seeding compositions"
#     end
# end

# bach_compositions

# def biber_compositions
#     response = RestClient.get 'https://api.openopus.org/work/list/composer/24/genre/all.json'
#     json = JSON.parse response
#     puts json

#     if !json.nil?
#         json["works"].map do |composition|
#             Composition.create(name: "#{composition["title"]}", genre: "#{composition["genre"]}", composer_id: 24)
#         end
#     else
#         puts "Error seeding compositions"
#     end
# end

# biber_compositions

# def buxtehude_compositions
#     response = RestClient.get 'https://api.openopus.org/work/list/composer/25/genre/all.json'
#     json = JSON.parse response
#     puts json

#     if !json.nil?
#         json["works"].map do |composition|
#             Composition.create(name: "#{composition["title"]}", genre: "#{composition["genre"]}", composer_id: 25)
#         end
#     else
#         puts "Error seeding compositions"
#     end
# end

# buxtehude_compositions

# def charpentier_compositions
#     response = RestClient.get 'https://api.openopus.org/work/list/composer/26/genre/all.json'
#     json = JSON.parse response
#     puts json

#     if !json.nil?
#         json["works"].map do |composition|
#             Composition.create(name: "#{composition["title"]}", genre: "#{composition["genre"]}", composer_id: 26)
#         end
#     else
#         puts "Error seeding compositions"
#     end
# end

# charpentier_compositions

# def corelli_compositions
#     response = RestClient.get 'https://api.openopus.org/work/list/composer/27/genre/all.json'
#     json = JSON.parse response
#     puts json

#     if !json.nil?
#         json["works"].map do |composition|
#             Composition.create(name: "#{composition["title"]}", genre: "#{composition["genre"]}", composer_id: 27)
#         end
#     else
#         puts "Error seeding compositions"
#     end
# end

# corelli_compositions

# def couperin_compositions
#     response = RestClient.get 'https://api.openopus.org/work/list/composer/28/genre/all.json'
#     json = JSON.parse response
#     puts json

#     if !json.nil?
#         json["works"].map do |composition|
#             Composition.create(name: "#{composition["title"]}", genre: "#{composition["genre"]}", composer_id: 28)
#         end
#     else
#         puts "Error seeding compositions"
#     end
# end

# couperin_compositions

# def frescobaldi_compositions
#     response = RestClient.get 'https://api.openopus.org/work/list/composer/29/genre/all.json'
#     json = JSON.parse response
#     puts json

#     if !json.nil?
#         json["works"].map do |composition|
#             Composition.create(name: "#{composition["title"]}", genre: "#{composition["genre"]}", composer_id: 29)
#         end
#     else
#         puts "Error seeding compositions"
#     end
# end

# frescobaldi_compositions

# def handel_compositions
#     response = RestClient.get 'https://api.openopus.org/work/list/composer/30/genre/all.json'
#     json = JSON.parse response
#     puts json

#     if !json.nil?
#         json["works"].map do |composition|
#             Composition.create(name: "#{composition["title"]}", genre: "#{composition["genre"]}", composer_id: 30)
#         end
#     else
#         puts "Error seeding compositions"
#     end
# end

# handel_compositions

# def lully_compositions
#     response = RestClient.get 'https://api.openopus.org/work/list/composer/31/genre/all.json'
#     json = JSON.parse response
#     puts json

#     if !json.nil?
#         json["works"].map do |composition|
#             Composition.create(name: "#{composition["title"]}", genre: "#{composition["genre"]}", composer_id: 31)
#         end
#     else
#         puts "Error seeding compositions"
#     end
# end

# lully_compositions

# def marais_compositions
#     response = RestClient.get 'https://api.openopus.org/work/list/composer/32/genre/all.json'
#     json = JSON.parse response
#     puts json

#     if !json.nil?
#         json["works"].map do |composition|
#             Composition.create(name: "#{composition["title"]}", genre: "#{composition["genre"]}", composer_id: 32)
#         end
#     else
#         puts "Error seeding compositions"
#     end
# end

# marais_compositions

# def b_marcello_compositions
#     response = RestClient.get 'https://api.openopus.org/work/list/composer/33/genre/all.json'
#     json = JSON.parse response
#     puts json

#     if !json.nil?
#         json["works"].map do |composition|
#             Composition.create(name: "#{composition["title"]}", genre: "#{composition["genre"]}", composer_id: 33)
#         end
#     else
#         puts "Error seeding compositions"
#     end
# end

# b_marcello_compositions

# def a_marcello_compositions
#     response = RestClient.get 'https://api.openopus.org/work/list/composer/34/genre/all.json'
#     json = JSON.parse response
#     puts json

#     if !json.nil?
#         json["works"].map do |composition|
#             Composition.create(name: "#{composition["title"]}", genre: "#{composition["genre"]}", composer_id: 34)
#         end
#     else
#         puts "Error seeding compositions"
#     end
# end

# a_marcello_compositions

# def pachelbel_compositions
#     response = RestClient.get 'https://api.openopus.org/work/list/composer/35/genre/all.json'
#     json = JSON.parse response
#     puts json

#     if !json.nil?
#         json["works"].map do |composition|
#             Composition.create(name: "#{composition["title"]}", genre: "#{composition["genre"]}", composer_id: 35)
#         end
#     else
#         puts "Error seeding compositions"
#     end
# end

# pachelbel_compositions

# def pergolesi_compositions
#     response = RestClient.get 'https://api.openopus.org/work/list/composer/36/genre/all.json'
#     json = JSON.parse response
#     puts json

#     if !json.nil?
#         json["works"].map do |composition|
#             Composition.create(name: "#{composition["title"]}", genre: "#{composition["genre"]}", composer_id: 36)
#         end
#     else
#         puts "Error seeding compositions"
#     end
# end

# pergolesi_compositions

# def purcell_compositions
#     response = RestClient.get 'https://api.openopus.org/work/list/composer/37/genre/all.json'
#     json = JSON.parse response
#     puts json

#     if !json.nil?
#         json["works"].map do |composition|
#             Composition.create(name: "#{composition["title"]}", genre: "#{composition["genre"]}", composer_id: 37)
#         end
#     else
#         puts "Error seeding compositions"
#     end
# end

# purcell_compositions

# def rameau_compositions
#     response = RestClient.get 'https://api.openopus.org/work/list/composer/38/genre/all.json'
#     json = JSON.parse response
#     puts json

#     if !json.nil?
#         json["works"].map do |composition|
#             Composition.create(name: "#{composition["title"]}", genre: "#{composition["genre"]}", composer_id: 38)
#         end
#     else
#         puts "Error seeding compositions"
#     end
# end

# rameau_compositions

# def scarlatti_compositions
#     response = RestClient.get 'https://api.openopus.org/work/list/composer/39/genre/all.json'
#     json = JSON.parse response
#     puts json

#     if !json.nil?
#         json["works"].map do |composition|
#             Composition.create(name: "#{composition["title"]}", genre: "#{composition["genre"]}", composer_id: 39)
#         end
#     else
#         puts "Error seeding compositions"
#     end
# end

# scarlatti_compositions

# def a_scarlatti_compositions
#     response = RestClient.get 'https://api.openopus.org/work/list/composer/40/genre/all.json'
#     json = JSON.parse response
#     puts json

#     if !json.nil?
#         json["works"].map do |composition|
#             Composition.create(name: "#{composition["title"]}", genre: "#{composition["genre"]}", composer_id: 40)
#         end
#     else
#         puts "Error seeding compositions"
#     end
# end

# a_scarlatti_compositions

# def tartini_compositions
#     response = RestClient.get 'https://api.openopus.org/work/list/composer/41/genre/all.json'
#     json = JSON.parse response
#     puts json

#     if !json.nil?
#         json["works"].map do |composition|
#             Composition.create(name: "#{composition["title"]}", genre: "#{composition["genre"]}", composer_id: 41)
#         end
#     else
#         puts "Error seeding compositions"
#     end
# end

# tartini_compositions

# def telemann_compositions
#     response = RestClient.get 'https://api.openopus.org/work/list/composer/42/genre/all.json'
#     json = JSON.parse response
#     puts json

#     if !json.nil?
#         json["works"].map do |composition|
#             Composition.create(name: "#{composition["title"]}", genre: "#{composition["genre"]}", composer_id: 42)
#         end
#     else
#         puts "Error seeding compositions"
#     end
# end

# telemann_compositions

# def vivaldi_compositions
#     response = RestClient.get 'https://api.openopus.org/work/list/composer/43/genre/all.json'
#     json = JSON.parse response
#     puts json

#     if !json.nil?
#         json["works"].map do |composition|
#             Composition.create(name: "#{composition["title"]}", genre: "#{composition["genre"]}", composer_id: 43)
#         end
#     else
#         puts "Error seeding compositions"
#     end
#  end

# vivaldi_compositions


def schumann_compositions
    response = RestClient.get 'https://api.openopus.org/work/list/composer/129/genre/all.json'
    json = JSON.parse response
    puts json

    if !json.nil?
        json["works"].map do |composition|
            Composition.create(name: "#{composition["title"]}", genre: "#{composition["genre"]}", composer_id: 94)
        end
    else
        puts "Error seeding compositions"
    end
 end

schumann_compositions

Composition.all.each do |composition| 
    begin
    RSpotify.authenticate(ENV["SPOTIFY_ID"], ENV["SPOTIFY_SECRET"])
        tracks = RSpotify::Track.search(composition[:name])
        track = tracks.first
    rescue NoMethodError => e
        
    else
        id = track.instance_variable_get('@id')
        composition.update(spotify_id: id)
    end
end

    # Composition.where(spotify_id: nil).destroy_all





        # comp = Composition.find_by(id: composition_params[:id])


        # composition.composer.name  + ' ' + 