const env = process.env;

const config = {
	  db: { /* don't expose password or any sensitive info, done only for demo */
		      host: env.DB_HOST || 'localhost',
		      user: env.DB_USER || 'questionUser',
		      password: env.DB_PASSWORD || 'cfQsHu12UD4B7MGn',
		      database: env.DB_NAME || 'IVY',
		    },
	  listPerPage: env.LIST_PER_PAGE || 100,
};


module.exports = config;
