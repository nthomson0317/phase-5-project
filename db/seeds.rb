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
