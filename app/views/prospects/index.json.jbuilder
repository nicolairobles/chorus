json.array!(@prospects) do |prospect|
  json.extract! prospect, :id, :email, :fname, :lname
  json.url prospect_url(prospect, format: :json)
end
