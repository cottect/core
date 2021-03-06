<?php

namespace Cottect\Frontend\Blog;


use Cottect\Frontend\GuestFrontend;
use Cottect\Utils\Template;
use Symfony\Component\Routing\Annotation\Route;

class BlogIndexFrontend extends GuestFrontend
{
    /**
     * @Route("/blog", name="blog_index")
     */
    public function index()
    {
        return $this->render(Template::FRONTEND_PRICING_INDEX, [
            'controller_name' => static::class,
        ]);
    }
}
