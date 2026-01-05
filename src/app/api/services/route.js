import services from "@/data/services";


export async function GET(request) {
    return Response.json(services)
}