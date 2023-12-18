class InvalidUsernameError extends Error {}
class DuplicatedResourceError extends Error {}
class MissingDataError extends Error {}
class NotUserError extends Error {}

module.exports = {InvalidUsernameError, DuplicatedResourceError, MissingDataError, NotUserError}
