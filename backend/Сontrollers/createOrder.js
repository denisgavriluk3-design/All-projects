export const createOrder = async (req, res, next) => {
    try {
      const result = await orderService.create(
        req.user.id,
        req.body.items
      );
      res.json(result);
    } catch (err) {
      next(err);
    }
  };
  