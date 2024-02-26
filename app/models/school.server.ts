import { client } from "#app/utils/db.server"
import e from "#dbschema/edgeql-js/index"

const School = { name: "Anxend School" }

const newSchool = await e.insert(e.School, School).run(client)
