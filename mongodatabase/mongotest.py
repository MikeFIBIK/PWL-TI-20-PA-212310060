# from pymongo.mongo_client import MongoClient
# from pymongo.read_concern import ReadConcern
# from pymongo.read_preferences import ReadPreference
# from pymongo.write_concern import WriteConcern

# from pymongo.server_api import ServerApi
# uri = "mongodb+srv://212310060:tes_password@cluster0.xwwpjda.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

# # Create a new client and connect to the server
# client = MongoClient(uri, server_api=ServerApi('1'))
# wc_majority = WriteConcern("majority", wtimeout = 1000)

# # Send a ping to confirm a successful connection
# def callback(session):
#     local = session.client.Mahasiswa.DataDiri
#     local.insert_many([
#         {"NPM": "212310001", "nama": "Michael Fernandez", "alamat": "Bogor"},
#         {"NPM": "212420002", "nama": "Mahasiswa 2", "alamat": "Bogor"},
#         {"NPM": "212420003", "nama": "Mahasiswa 3", "alamat": "Jakarta"},
#         {"NPM": "212420004", "nama": "Mahasiswa 4", "alamat": "Tangerang"},
#         {"NPM": "212420005", "nama": "Mahasiswa 5", "alamat": "Bogor"}
#     ], session=session)

# # Start a session and run the transaction
# with client.start_session() as session:
#     session.with_transaction(
#         callback,
#         read_concern=ReadConcern("local"),
#         write_concern=wc_majority,
#         read_preference=ReadPreference.PRIMARY,
#     )

# print("Data successfully inserted")


from pymongo import MongoClient

from pymongo.server_api import ServerApi
uri = "mongodb+srv://212310060:tes_password@cluster0.xwwpjda.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

# # Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))

# Menggunakan database dan koleksi yang sesuai
db = client["Mahasiswa"]
collection = db["DataDiri"]

# Definisikan operasi agregasi
pipeline = [
    {"$project": {"nama_length": {"$strLenCP": "$nama"}}},
    {"$group": {"_id": "$nama_length", "total_mhs": {"$sum": 1}}},
    {"$out": "MHS_Based_On_Name_Length"}
]

# Jalankan operasi agregasi
result = collection.aggregate(pipeline)

# Hasil akan disimpan dalam koleksi baru "Sorted_Based_On_Name_Length"
print("Operasi agregasi selesai. Hasil tersimpan di koleksi 'Sorted_Based_On_Name_Length'.")

# Memeriksa hasil agregasi
output_collection = db["Sorted_Based_On_Name_Length"]
for doc in output_collection.find():
    print(doc)