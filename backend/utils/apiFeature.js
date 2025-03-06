class ApiFeature {
    constructor(query, queryString) {
        this.query = query;              // Storing the query (database request)
        this.queryString = queryString;  // Storing the query parameters (like filters, search terms, etc.)
    }

    search() {
        // Check if a keyword exists in the queryString and create a case-insensitive search filter
        const keyword = this.queryString.keyword ? {
            name: {
                $regex: this.queryString.keyword, // Pattern match the keyword with the name field
                $options: 'i'                    // Case-insensitive search (e.g., "apple" matches "Apple")
            }
        } : {}

        this.query = this.query.find({ ...keyword }); // Apply the keyword filter to the query
        return this;                                  // Return this instance for method chaining
    }

    filter() {
        const queryStringCopy = { ...this.queryString };  // Make a copy of the queryString to avoid modifying the original
        const deletedQueryString = ["keyword", "page", "limit"]; // Parameters we don't need for filtering

        // Remove these unwanted parameters from the copied query string
        deletedQueryString.forEach(element => {
            delete queryStringCopy[element]; // Delete keyword, page, and limit from the copied queryString
        });

        let queryString = JSON.stringify(queryStringCopy); // Convert queryStringCopy to a string for regex replacement
        // Special line: Replace comparison operators (gt, gte, lt, lte) with MongoDB format (e.g., $gt)
        // \b matches word boundaries, ensuring only exact terms are replaced (e.g., "gt", not part of another word)
        queryString = queryString.replace(/\b(gt|gte|lt|lte)\b/g, (key) => `$${key}`);
        this.query = this.query.find(JSON.parse(queryString)); // Convert the string back to an object and apply the filters
        return this;                                           // Return this instance for method chaining
    }

    pagination(perPageProduct) {
        const currentPage = Number(this.queryString.page) || 1;  // Get the current page number or default to 1
        const productSkip = perPageProduct * (currentPage - 1);  // Calculate how many products to skip for pagination
        // Apply the limit and skip for pagination based on per page product and current page
        this.query = this.query.limit(perPageProduct).skip(productSkip);
        return this;                                             // Return this instance for method chaining
    }
}

export default ApiFeature;
