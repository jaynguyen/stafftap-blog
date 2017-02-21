<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'stafftap_blog');

/** MySQL database username */
define('DB_USER', 'vitaldbuser');

/** MySQL database password */
define('DB_PASSWORD', 'Letvital1n!');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '.:hO?U`Fm~,>(I|+ri#J@A.|w{r}o).!VcTetu+m@(f2}6>.#`8E(&dg!-2b05:J');
define('SECURE_AUTH_KEY',  'Zt6ee@6d:?.VS2]bM?#W2IX%$N=kH-2u=hhpoD5? cQm0+4~?>u&,)>*?Cl2nz;w');
define('LOGGED_IN_KEY',    'l5>B%b>BEH{@Rnp?M7QwXdLK?ADTL<.?6,he`CKEHH=oVk<=C AM:B-gM4V;sjfU');
define('NONCE_KEY',        'chr#y2|E:QIiE`2.Ng{Gn_E5%Di3s_3NR^+}4iB~V]#.e18D3< aEiNb&IOxmh}A');
define('AUTH_SALT',        'M60U8nO9_w8u/,tq.UH+BN``3XnRT@yAn,0.F $AxZ8K?F[O]]H<dZ@m{X1PRD.a');
define('SECURE_AUTH_SALT', ';z18]l8M0F/|uO2F<oZIedv7xw3d=i`}Az^82;j)vZ&$EGT,E@::41L=(f!F)`Ac');
define('LOGGED_IN_SALT',   ']QMUY,#xDTXx2a8>Ru3`S1;W(]bD&vf(e%|a#79sl ZFAk:yW>mj|B*XQkdX:J!f');
define('NONCE_SALT',       'L0+Q:`E|oV?S1>Xymq(#Q FMd/|9:(|,p{O/W0H|2])Ar,1.vm]:s%CT*@UUFPq|');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'snblog_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
