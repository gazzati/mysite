const ageDifMs = Date.now() - new Date("08.26.1999").getTime()
const ageDate = new Date(ageDifMs)
const age = Math.abs(ageDate.getUTCFullYear() - 1970)

export default age
