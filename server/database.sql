-- =========================================================
-- QES DATABASE
-- =========================================================

-- =========================================================
-- 1. ADMINS
-- =========================================================

CREATE TABLE IF NOT EXISTS admins (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


-- =========================================================
-- 2. PRODUCTS
-- =========================================================

CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,

    name VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,

    category VARCHAR(255),

    short_description TEXT,
    description TEXT,

    image VARCHAR(500),
    hero_image VARCHAR(500),

    features JSONB DEFAULT '[]'::jsonb,

    is_active BOOLEAN DEFAULT TRUE,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


-- =========================================================
-- 3. INDUSTRIES
-- =========================================================

CREATE TABLE IF NOT EXISTS industries (
    id SERIAL PRIMARY KEY,

    name VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,

    title VARCHAR(255),
    description TEXT,

    image VARCHAR(500),

    applications JSONB DEFAULT '[]'::jsonb,

    is_active BOOLEAN DEFAULT TRUE,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


-- =========================================================
-- 4. GALLERY
-- =========================================================

CREATE TABLE IF NOT EXISTS gallery (
    id SERIAL PRIMARY KEY,

    title VARCHAR(255) NOT NULL,

    description TEXT,

    image VARCHAR(500) NOT NULL,

    category VARCHAR(150),

    is_active BOOLEAN DEFAULT TRUE,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


-- =========================================================
-- 5. RESOURCES / DOWNLOADS
-- =========================================================

CREATE TABLE IF NOT EXISTS resources (
    id SERIAL PRIMARY KEY,

    title VARCHAR(255) NOT NULL,

    description TEXT,

    file_url VARCHAR(500),

    preview_image VARCHAR(500),

    resource_type VARCHAR(100),

    is_active BOOLEAN DEFAULT TRUE,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


-- =========================================================
-- 6. NEWS
-- =========================================================

CREATE TABLE IF NOT EXISTS news (
    id SERIAL PRIMARY KEY,

    title VARCHAR(255) NOT NULL,

    slug VARCHAR(255) UNIQUE NOT NULL,

    summary TEXT,
    content TEXT,

    image VARCHAR(500),

    published_at TIMESTAMP,

    is_active BOOLEAN DEFAULT TRUE,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


-- =========================================================
-- 7. CONTACT ENQUIRIES
-- =========================================================

CREATE TABLE IF NOT EXISTS contact_enquiries (
    id SERIAL PRIMARY KEY,

    name VARCHAR(150) NOT NULL,

    email VARCHAR(255) NOT NULL,

    phone VARCHAR(50),

    company VARCHAR(255),

    subject VARCHAR(255),

    message TEXT NOT NULL,

    status VARCHAR(50) DEFAULT 'new',

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


-- =========================================================
-- 8. SITE SETTINGS
-- This will allow hero images/text etc. to become dynamic later.
-- =========================================================

CREATE TABLE IF NOT EXISTS site_settings (
    id SERIAL PRIMARY KEY,

    setting_key VARCHAR(255) UNIQUE NOT NULL,

    setting_value TEXT,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


-- =========================================================
-- INDEXES
-- =========================================================

CREATE INDEX IF NOT EXISTS idx_products_slug
ON products(slug);

CREATE INDEX IF NOT EXISTS idx_products_active
ON products(is_active);

CREATE INDEX IF NOT EXISTS idx_industries_slug
ON industries(slug);

CREATE INDEX IF NOT EXISTS idx_gallery_active
ON gallery(is_active);

CREATE INDEX IF NOT EXISTS idx_news_slug
ON news(slug);

CREATE INDEX IF NOT EXISTS idx_contact_status
ON contact_enquiries(status);