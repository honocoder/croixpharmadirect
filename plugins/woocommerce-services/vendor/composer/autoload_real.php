<?php

// autoload_real.php @generated by Composer

class ComposerAutoloaderInitcc188dcfb86fbe3d1ef2bb0631f6b70f
{
    private static $loader;

    public static function loadClassLoader($class)
    {
        if ('Composer\Autoload\ClassLoader' === $class) {
            require __DIR__ . '/ClassLoader.php';
        }
    }

    /**
     * @return \Composer\Autoload\ClassLoader
     */
    public static function getLoader()
    {
        if (null !== self::$loader) {
            return self::$loader;
        }

        spl_autoload_register(array('ComposerAutoloaderInitcc188dcfb86fbe3d1ef2bb0631f6b70f', 'loadClassLoader'), true, true);
        self::$loader = $loader = new \Composer\Autoload\ClassLoader(\dirname(__DIR__));
        spl_autoload_unregister(array('ComposerAutoloaderInitcc188dcfb86fbe3d1ef2bb0631f6b70f', 'loadClassLoader'));

        require __DIR__ . '/autoload_static.php';
        call_user_func(\Composer\Autoload\ComposerStaticInitcc188dcfb86fbe3d1ef2bb0631f6b70f::getInitializer($loader));

        $loader->register(true);

        return $loader;
    }
}
